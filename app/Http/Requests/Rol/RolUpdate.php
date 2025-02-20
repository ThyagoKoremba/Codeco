<?php

namespace App\Http\Requests\Rol;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class RolUpdate extends FormRequest
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
            'roldescripcion'=>'required|regex:/^[\p{L}\p{N}\d\s\.\-]{1,45}$/u',
            'rolabreviatura'=>'required|regex:/^[\p{L}\p{N}\d\s\.\-]{1,15}$/u',
            'isdefaultvalue'=>'boolean',
            'activosn'=>'boolean',
        ];
    }
}
