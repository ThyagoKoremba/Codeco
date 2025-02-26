<?php

namespace App\Http\Requests\Productor;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProductorUpdate extends FormRequest
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
            'dnicuit' => [
                'required',
                'regex:/^[\p{L}\p{N}\d\s\.\-]{1,14}$/u',
                Rule::unique('productores', 'dnicuit')->ignore($this->productor->id),
            ],'mail'=>[
                'required',
                'email',
                Rule::unique('productores', 'mail')->ignore($this->productor->id),
            ],
            'apellido'      => 'required|regex:/^[\p{L}\d\s\.\-]{1,255}$/u',
            'nombres'       => 'required|regex:/^[\p{L}\d\s\.\-]{1,255}$/u',
            'activosn'      => 'boolean',
            'telefono'      => 'required|regex:/^[\p{N}\d\s\.\-]{1,15}$/u',
        ];
    }
}
