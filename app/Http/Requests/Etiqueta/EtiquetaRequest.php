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
            'etiquetanombre' => 'required|unique:etiquetas,etiquetanombre|regex:/^[\p{L}\p{N}\d\s\.\-]{1,100}$/u',
            'etiquetaabreviatura' => 'required|unique:etiquetas,etiquetaabreviatura|regex:/^[\p{L}\p{N}\d\s\.\-]{1,15}$/u',
            'isdefaultvalue' => 'boolean',
            'activosn' => 'boolean',
        ];
    }
}
