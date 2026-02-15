'use client'

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact(){
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [loading,setLoading]=useState(false);

  const send = async (e:any) => {
    e.preventDefault();

    // basic validation
    if(!form.name || !form.email || !form.message){
      toast.error("Please fill all fields");
      return;
    }

    try{
      setLoading(true);

      const res = await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form)
      });

      const data = await res.json();

      if(res.ok && data.success){
        toast.success("Message sent successfully ");

        // reset form
        setForm({name:'',email:'',message:''});

      } else {
        toast.error("Failed to send message");
      }

    }catch(err){
      console.error(err);
      toast.error("Server error. Try again later");
    }finally{
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full p-6 border border-gray-800 rounded-xl">
        <h2 className="text-2xl font-bold text-brand mb-4">Contact</h2>

        <form onSubmit={send}>
          <input
  value={form.name}
  autoComplete="off"
  data-lpignore="true"
  className="w-full p-3 dark:bg-black border border-gray-700 rounded mb-3"
  placeholder="Name"
  onChange={e=>setForm({...form,name:e.target.value})}
/>

          <input
  value={form.email}
  autoComplete="off"
  data-lpignore="true"
  className="w-full p-3 dark:bg-black border border-gray-700 rounded mb-3"
  placeholder="email"
  onChange={e=>setForm({...form,email:e.target.value})}
/>

         <textarea
  value={form.message}
  autoComplete="off"
  data-lpignore="true"
  className="w-full p-3 dark:bg-black border border-gray-700 rounded mb-3"
  placeholder="Message"
  onChange={e=>setForm({...form,message:e.target.value})}
/>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand text-black font-semibold rounded-lg disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  )
}