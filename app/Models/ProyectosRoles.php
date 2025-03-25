<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosRoles extends Model
{
    use HasFactory;
    protected $table = 'proyectosroles';
    protected $primaryKey = ['proyectoid', 'rolid'];
    public $incrementing = false;
    protected $fillable = [
        'proyectoid',
        'rolid',
        'identificadorproyecto',
        'activosn'
    ];
    public function proyecto()
    {
        return $this->belongsTo(Proyectos::class, 'proyectoid', 'id');
    }
    public function rol()
    {
        return $this->belongsTo(Roles::class, 'rolid', 'id');
    }
}
