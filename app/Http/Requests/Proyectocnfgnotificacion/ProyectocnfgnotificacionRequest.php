<?php

namespace App\Http\Requests\Proyectocnfgnotificacion;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProyectocnfgnotificacionRequest extends FormRequest
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
            'mail_notificacion'     => 'required_if:sn_mail_notificacion,1|email',
            'movil_notificacion' => 'required_if:sn_movil_notificacion,1|regex:/^[0-9]*$/|max:15',
        ];
    }
}
