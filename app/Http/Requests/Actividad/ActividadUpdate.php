<?php

namespace App\Http\Requests\Actividad;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ActividadUpdate extends FormRequest
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
            'actividadnombre'=>[
                'required',
                'regex:/^[\p{L}\p{N}\s\.\-]{1,45}$/',
                Rule::unique('actividades','actividadnombre')->ignore($this->actividad->id),
                ],
                'actividadabreviatura' => 'required|regex:/^[\p{L}\p{N}.\-\s]{1,15}$/u',
                'isdefaultvalue'=>'boolean',
                'activosn'=>'boolean',
                'titulosn'=>'boolean',
                'informacionsn' => 'boolean',
                'etiquetasn' => 'boolean',
                'actividaddsc'=>'string',
        ];
    }
}
