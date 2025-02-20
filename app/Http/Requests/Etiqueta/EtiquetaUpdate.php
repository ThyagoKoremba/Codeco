<?php

namespace App\Http\Requests\Etiqueta;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class EtiquetaUpdate extends FormRequest
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
            'etiquetanombre' => [
                'required',
                'regex:/^[\p{L}\p{N}\d\s\.\-]{1,100}$/u',
                Rule::unique('etiquetas', 'etiquetanombre')->ignore($this->etiqueta->id),
            ],
            'etiquetaabreviatura' => [
                'required',
                'regex:/^[\p{L}\p{N}\d\s\.\-]{1,15}$/u',
                Rule::unique('etiquetas', 'etiquetaabreviatura')->ignore($this->etiqueta->id),
            ],
            'isdefaultvalue' => 'boolean',
            'activosn' => 'boolean',
        ];
    }
}
