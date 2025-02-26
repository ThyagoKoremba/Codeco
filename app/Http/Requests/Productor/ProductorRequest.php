<?php

namespace App\Http\Requests\Productor;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProductorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'usuarioid'     => 'nullable',
            'apellido'      => 'required|regex:/^[\p{L}\d\s\.\-]{1,255}$/u',
            'nombres'       => 'required|regex:/^[\p{L}\d\s\.\-]{1,255}$/u',
            'dnicuit'       => 'required|regex:/^[\p{L}\p{N}\d\s\.\-]{1,14}$/u',
            'activosn'      => 'boolean',
            'mail'          => 'required|email|unique:productores,mail',
            'telefono'      => 'required|regex:/^[\p{N}\d\s\.\-]{1,15}$/u',
        ];
    }
}
