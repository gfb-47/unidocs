<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationProcess extends Mailable
{
    use Queueable, SerializesModels;

    private $title;
    private $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($message, $title)
    {
        $this->title = $title;

        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $originalTitle = $this->title;
        $mailMessage = $this->message;
        return $this->subject("Unidocs - {$this->title}")
            ->view('mail.notification', compact('originalTitle', 'mailMessage'))
            ->with([
                'title' => $this->title,
                'message' => $this->message,
            ]);
    }
}