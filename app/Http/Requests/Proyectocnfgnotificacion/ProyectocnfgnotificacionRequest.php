<?php

namespace App\Http\Requests\ProyectoCnfgNotificacion;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ProyectoCnfgNotificacionRequest extends FormRequest
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
            'sn_mail_notificacion'   => 'nullable|boolean',
            'mail_notificacion'      => 'nullable|exclude_if:sn_mail_notificacion,0|required_if:sn_mail_notificacion,1|email',
        
            'sn_movil_notificacion'  => 'nullable|boolean',
            'movil_notificacion'     => 'nullable|exclude_if:sn_movil_notificacion,0|required_if:sn_movil_notificacion,1|regex:/^[0-9]*$/|max:15',
        ];
        
    }
}
