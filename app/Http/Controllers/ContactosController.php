<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contacto\ContactoRequest;
use App\Http\Requests\Contacto\ContactoUpdate;
use App\Models\condiciontributarias;
use App\Models\contactos;
use App\Models\Fisicojuridicos;
use App\Models\geopais;
use App\Models\Identidades;
use Inertia\Inertia;

class ContactosController extends Controller
{
    public function create () {
        $fisicojuridico=Fisicojuridicos::orderBy('id')->get();
        $pais=Geopais::orderBy('id')->get();
        $identidades=Identidades::orderBy('id')->get();
        $condicionestributarias=Condiciontributarias::orderBy('id')->get();
        return Inertia::render('Contacto/Create',compact('fisicojuridico','pais','identidades','condicionestributarias'));
    }

    public function store (ContactoRequest $contacto) {
        $data=$contacto->all();
        $data['apellidoynombre'] = ($data['apellidorazonsocial'] ?? '') . ' ' . 
                                    ($data['nombrefansatia'] ?? '') . ' ' . 
                                    ($data['nombresegundo'] ?? '');  
        $data['patronbusqueda'] = $data['apellidoynombre'] . ' ' . $data['car'];
        contactos::create($data);
        return to_route('contacto.index');
    }

    public function index () {
        
        $contactos=contactos::orderBy('id')->get();
        return Inertia::render('/Contacto/Index',compact('contactos'));
    }

    public function edit (contactos $contacto) {
        $fisicojuridico=Fisicojuridicos::orderBy('id')->get();
        $pais=Geopais::orderBy('id')->get();
        $identidades=Identidades::orderBy('id')->get();
        $condicionestributarias=Condiciontributarias::orderBy('id')->get();
        return Inertia::render('Contacto/Edit',compact('contacto'));
    }

    public function update (ContactoUpdate $request, contactos $contacto) {
        $data=$request->all();
        $contacto->update($data);
        return to_route('contato.index');
    }

    public function cambiarEstado (contactos $contacto) {
        $contacto->sn_activo=!$contacto->sn_activo;
        $contacto->save();

        return to_route('contacto.index');
    }
}
