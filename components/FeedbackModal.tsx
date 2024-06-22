'use client';

import { MouseEvent, FormEvent, ChangeEvent, useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

type FD = {
    email: string,
    message: string
};

const FeedbackModal = () => {
    const [formData, setFormData] = useState<FD>({
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData();
        form.append('email', formData.email);
        form.append('message', formData.message);
        try {
            const res = await fetch('https://spritesheet-maker-api.vercel.app/api/feedback', {
                method: 'POST',
                body: form
            });
            if(!res.ok) throw new Error(await res.text());
            toast.success('Feedback revieved, Thank you 🫰🏻');
            close(null);
        } catch(err) {
            toast.error('An error occurred, please try again later');
            close(null);
        }
    }

    const close = (event: MouseEvent<HTMLButtonElement> | null) => {
        const form = document.getElementById('feedback-form') as HTMLFormElement;
        const dialog = document.getElementById('my_modal_4') as HTMLDialogElement;
        form?.reset();
        dialog?.close();
    }

    const submit = (event: MouseEvent<HTMLButtonElement>) => {
        // console.log('submitting');
        const form = document.getElementById('feedback-form');
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        form?.appendChild(submitButton);
        submitButton.click();
        form?.removeChild(submitButton);
    }

    return (
        <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Send Feedback</h3>
                <form id='feedback-form' onSubmit={onSubmit}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" name="email" className="grow" placeholder="Email" onChange={handleChange} required />
                    </label>
                    <textarea className="textarea textarea-bordered w-full mt-4" name="message" placeholder="Message" onChange={handleChange} required></textarea>
                </form>
                <div className="modal-action">
                    <div className="flex justify-between w-full">
                        <button className="btn" onClick={close}>Close</button>
                        <button className="btn btn-primary" onClick={submit}>Send</button>
                    </div>
                </div>
            </div>
        </dialog>
    );
}

export default FeedbackModal;