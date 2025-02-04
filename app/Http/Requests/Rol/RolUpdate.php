<?php

namespace App\Http\Requests\Rol;

use Illuminate\Foundation\Http\FormRequest;

class RolUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'roldescripcion'=>'required|regex:/^[a-zA-Z0-9]{1,45}$/',
            'rolabreviatura'=>'required|regex:/^[a-zA-Z0-9]{1,15}$/',
            'isdefaultvalue'=>'boolean',
            'activosn'=>'boolean',
        ];
    }
}
