<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class auditorias extends Model
{
    use HasFactory;
    protected $table='auditorias';
    protected $fillable =[
        'tipo',
        'data',
        'user_id'
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
}
