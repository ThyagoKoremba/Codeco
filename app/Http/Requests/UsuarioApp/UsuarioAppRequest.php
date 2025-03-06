<?php

namespace App\Http\Requests\UsuarioApp;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UsuarioAppRequest extends FormRequest
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
            'dnicuit' => 'required|string|max:14|unique:usuarios,dnicuit',
            'nombre' => 'required|string|regex:/^[\p{L}\d\s]{1,255}$/u',
            'apellido' => 'required|string|regex:/^[\p{L}\d\s]{1,255}$/u',
            'usuario' => 'required|string|unique:usuarios,usuario|max:45',
            'clave' => 'required|string',
            'mail' => 'required|email|unique:usuarios,mail',
            'telefono' => 'numeric|required|digits_between:1,45',
            'activosn' => 'boolean',
        ];
    }
}
