<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class appVersion extends Model
{
    use HasFactory;
    protected $table = "appversion";
    protected $primaryKey = 'appversion';
    public $incrementing = false;
    protected $keyType = 'string';
}
