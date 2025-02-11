<?php

namespace App\Http\Requests\Proyecto;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProyectoUpdate extends FormRequest
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
            'proyectonombre' => [
                'required',
                'regex:/^[\p{L}\p{N}\.\-\s]{1,100}$/u',
                Rule::unique('proyectos', 'proyectonombre')->ignore($this->proyecto->id),
            ],
            'proyectoabreviatura'   => 'required|regex:/^[\p{L}\p{N}]{1,15}$/u',
            'fechainicio'           => 'date',
            'fechafinalizacion'     => 'nullable|date|after_or_equal:fechainicio',
            'activosn'              => 'boolean',
            'productoressn'         => 'boolean',
            'proyectodescripcion'   => 'nullable|string',
        ];
    }
}
