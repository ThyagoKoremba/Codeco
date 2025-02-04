<?php

namespace App\Http\Requests\Etiqueta;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class EtiquetaRequest extends FormRequest
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
            'etiquetanombre' => 'required|unique:etiquetas,etiquetanombre|regex:/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{1,100}$/',
            'etiquetaabreviatura' => 'required|unique:etiquetas,etiquetaabreviatura|regex:/^[a-zA-Z0-9]{1,15}$/',
            'isdefaultvalue' => 'boolean',
            'activosn' => 'boolean',
        ];
    }
}
