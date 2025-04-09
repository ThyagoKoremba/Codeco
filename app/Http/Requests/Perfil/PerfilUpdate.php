<?php

namespace App\Http\Requests\Perfil;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class PerfilUpdate extends FormRequest
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
            'nombre'=>['required',
            'regex:/^[\p{L}\p{N}\d\s\.\-]{1,45}$/u',
            Rule::unique('perfiles','nombre')->ignore($this->perfil->id)
        ],
            'abreviatura'=>['required',
            'regex:/^[\p{L}\p{N}\d\s\.\-]{1,20}$/u',
            Rule::unique('perfiles','abreviatura')->ignore($this->perfil->id)
        ],
            'informacion'=>'nullable',
            'sn_activo'=>'boolean',
        ];
    }
}
