<?php

namespace App\Http\Controllers;

use App\Exceptions\Status;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message = "", $code = 200)
    {
        $response = [
            'status' => $code,
            'success' => true,
            'message' => $message,
            'data'    => $result
        ];

        return response()->json($response)->setStatusCode($code, Status::getStatusMessage($code));
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'status' => $code,
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response)->setStatusCode($code, Status::getStatusMessage($code));
    }
}
