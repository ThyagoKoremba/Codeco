<?php

namespace App\Http\Requests\Menu;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class MenuUpdate extends FormRequest
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
            Rule::unique('menus','nombre')->ignore($this->menu->id)
        ],
            'abreviatura'=>['required',
            'regex:/^[\p{L}\p{N}\d\s\.\-]{1,20}$/u',
            Rule::unique('menus','abreviatura')->ignore($this->menu->id)
        ],
            'informacion'=>'nullable',
            'sn_activo'=>'boolean',
        ];
    }
}
