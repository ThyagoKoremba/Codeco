<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactoSituacionCiviles extends Model
{
    use HasFactory;
    protected $table = "contactosituacionciviles";
    protected $fillable=[
        'descripcion'
    ];
}
