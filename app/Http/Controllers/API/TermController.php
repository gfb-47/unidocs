<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\SignedTerm;
use App\Models\Term;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TermController extends BaseController
{
    public function index(Request $request, $process_id)
    {

        $data = Term::select('terms.*')
            ->with('sign')
            ->join('processes', 'processes.id', '=', 'terms.process_id')
            ->where('terms.process_id', $process_id)
            ->get();

        return $this->sendResponse($data);
    }

    public function signDocument(Request $request)
    {
        $user_id = auth()->id();
        try {
            DB::beginTransaction();

            if ($request->hasFile('file')) {
                $term = Term::with(['sign' => function ($q) use ($user_id) {
                    $q->where('user_id', $user_id);
                }])->find($request->term_id);
                if ($term->file_directory) {
                    Storage::disk('public')->delete($term->file_directory);
                }
                $folder = substr($term->original_directory, 0, strrpos($term->original_directory, '/'));
                $link = $request->file->store($folder, 'public');
                $term->fill(['file_directory' => $link])->save();

                if (sizeof($term->sign) == 0) {
                    $term->sign()->attach($user_id);
                }

            }
            DB::commit();

            return $this->sendResponse([], 'Saved With Sucess');
        } catch (Exception $e) {
            DB::rollback();

            return $this->sendError($e->getMessage());

        }
    }

    public function sendDocument(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'file' => 'file|mimes:pdf,doc,docx,dot|max:2048',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            DB::beginTransaction();
            $process = Process::find($request->process_id);
            $link = $request->file->store($process->folder, 'public');
            Term::create([
                'name' => $request->file->getClientOriginalName(),
                'original_directory' => $link,
                'process_id' => $request->process_id,
            ]);
            DB::commit();

            return $this->sendResponse([], 'Saved With Sucess');
        } catch (Exception $e) {
            DB::rollback();

            return $this->sendError($e->getMessage());

        }
    }

    public function reset($id, Request $request)
    {
        try {
            $item = Term::with('sign')->findOrFail($id);
            if ($item->file_directory) {
                Storage::disk('public')->delete($item->file_directory);
                $item->fill(['file_directory' => null])->save();
                foreach ($item->sign as $key => $signer) {
                    SignedTerm::find($signer->pivot->id)->delete();
                }
            }

            return $this->sendResponse([], 'Arquivo resetado com sucesso! (✌🏼 Dois)');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $item = Term::findOrFail($id);
            Storage::disk('public')->delete($item->link);
            $item->delete();

            return $this->sendResponse([], 'Arquivo deletado com sucesso! (😜 Poze)');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}