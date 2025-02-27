<?php

namespace App\Http\Requests\Proyectocnfgnotificacion;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProyectocnfgnotificacionUpdate extends FormRequest
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
            'sn_mail_notificacion' => 'sometimes|boolean',
            'mail_notificacion'    => 'required_if:sn_mail_notificacion,true|email',

            'sn_movil_notificacion' => 'sometimes|boolean',
            'movil_notificacion'    => 'required_if:sn_movil_notificacion,true|regex:/^[0-9]*$/|max:15|nullable',
        ];
    }
}
