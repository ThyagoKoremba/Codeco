<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagsReferencias extends Model
{
    use HasFactory;
    protected $table = 'tagsreferencias';
    protected $fillable = [
        'descripcion',
        'abreviatura',
        'abreviatura_corta',
        'sn_activo'
    ];
}
