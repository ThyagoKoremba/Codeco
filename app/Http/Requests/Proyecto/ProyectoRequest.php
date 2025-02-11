<?php

namespace App\Http\Requests\Proyecto;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProyectoRequest extends FormRequest
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
            'proyectonombre'        => 'required|unique:proyectos,proyectonombre|regex:/^[\p{L}\p{N}\.\-\s]{1,100}$/u',
            'proyectoabreviatura'   => 'required|regex:/^[a-zA-Z0-9]{1,15}$/',
            'fechainicio'           => 'required|date',
            'fechafinalizacion'     => 'nullable|date|after_or_equal:fechainicio',
            'activosn'              => 'boolean',
            'productoressn'         => 'boolean',
            'proyectodescripcion'   => 'nullable|string',
        ];
    }
}
