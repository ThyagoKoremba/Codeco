<?php

namespace App\Http\Requests\UsuarioApp;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UsuarioAppUpdate extends FormRequest
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
            'dnicuit' => [
                'required',
                'string',
                'max:14',
                Rule::unique('usuarios','dnicuit')->ignore($this->usuarioapp->id)
            ],
            'mail' => [
                'required',
                'email',
                Rule::unique('usuarios','mail')->ignore($this->usuarioapp->id)
            ],
            'usuario'=>[
                'required',
                'string',
                'max:45',
                Rule::unique('usuarios','usuario')->ignore($this->usuarioapp->id)
            ],
            'nombre' => 'required|string|regex:/^[\p{L}\d\s]{1,255}$/u',
            'apellido' => 'required|string|regex:/^[\p{L}\d\s]{1,255}$/u',
            'clave' => 'required|string',
            'telefono' => 'required|numeric|digits_between:1,45',
        ];
    }
}
