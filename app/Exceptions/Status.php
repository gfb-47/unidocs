<?php

namespace App\Exceptions;

class Status
{
    public static function getStatusMessage(Int $code)
    {
        $message = 'Unknown Status Code';
        switch ($code) {
            case 200:
                $message = "Ok";
                break;
            case 201:
                $message = "Created";
                break;
            case 203:
                $message = "Not Authorized";
                break;
            case 204:
                $message = "No Content";
                break;
            case 213:
                $message = "Validation Error";
                break;
            case 214:
                $message = "Item not found";
                break;
            case 215:
                $message = "Item already exists";
                break;
            case 401:
                $message = 'Unauthorized';
                break;
            case 403:
                $message = 'Forbidden';
                break;
            case 404:
                $message = 'Not Found';
                break;
            case 405:
                $message = 'Method Not Allowed';
                break;
            case 500:
                $message = 'Internal Server Error';
                break;
        }

        return $message;
    }
}
