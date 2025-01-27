<?php

namespace App\Http\Requests\Categoria;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CategoriaRequest extends FormRequest
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
            'descripcion'=>'required|max:45|unique:categorias,descripcion',
            'abreviatura'=>'required|max:10|unique:categorias,abreviatura',
            'sn_registrosistema'=>'boolean',
            'sn_activo'=>'boolean',
        ];
    }
}
