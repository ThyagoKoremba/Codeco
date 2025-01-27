<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contact\StoreRequest;
use App\Http\Requests\Contact\UpdateRequest;
use App\Models\contact;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PharIo\Manifest\Author;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::where('user_id',Auth::user()->id)->get();
        return Inertia::render('Contact/Index',compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->only('name','phone','visibility');
        if($request->hasFile('avatar')){
            $file=$request->file('avatar');
            $routeImage=$file->store('avatars',['disk'=>'public']);
            $data['avatar']=$routeImage;

        }

        $data['user_id']=Auth::user()->id;
        Contact::create($data);

        return to_route('contact.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Contact/Edit', compact('contact'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, contact $contact)
    {
        $data = $request->only('name','phone','visibility');
        if($request->hasFile('avatar')){
            $file=$request->file('avatar');
            $routeImage=$file->store('avatars',['disk'=>'public']);
            $data['avatar']=$routeImage;
            if($contact->avatar){
                Storage::disk('public')->delete($contact->avatar);
            }
        }

        $data['user_id']=Auth::user()->id;
        $contact->update($data);

        return to_route('contact.edit',$contact);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(contact $contact)
    {
        if($contact->avatar){
            Storage::disk('public')->delete($contact->avatar);
        }

        $contact->delete();

        return to_route('contact.index');
    }
}
