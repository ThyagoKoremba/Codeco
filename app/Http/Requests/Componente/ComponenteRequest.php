<?php

namespace App\Http\Requests\Componente;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ComponenteRequest extends FormRequest
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
            'nombre'=>'required|regex:/^[\p{L}\p{N}\d\s\.\-]{1,180}$/u|unique:componente,nombre',
            'descripcion'=>'regex:/^[\p{L}\p{N}\d\s\.\-]{1,100}$/u',
            'informacion'=>'regex:/^[\p{L}\p{N}\d\s\.\-]{1,180}$/u',
            'url'=>'unique:componentes,url',
            'sn_activo'=>'boolean',

        ];
    }
}
