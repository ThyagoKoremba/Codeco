<?php

namespace App\Http\Requests\Actividad;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ActividadRequest extends FormRequest
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
            'actividadnombre'=>'required|unique:actividades,actividadnombre|regex:/^[a-zA-Z0-9]{1,45}$/',
            'actividadabreviatura'=>'required|regex:/^[a-zA-Z0-9]{1,15}$/',
            'isdefaultvalue'=>'boolean',
            'activosn'=>'boolean',
            'titulosn'=>'boolean',
            'informacionsn' => 'required|in:0,1',
            'etiquetasn' => 'required|in:0,1',
            'actividaddsc'=>'string'
        ];
    }
}
