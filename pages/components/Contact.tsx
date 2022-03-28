import ContactItems from "./parts/ContactItems";
import Field from './parts/Field';
import Button from "./parts/Button";

const Contact = () => {
    return (

        <section className='container mx-auto px-10 2xl:px-0' id='contact'>
            <div className="bg-primarygray flex">
                <div className="w-6/12 border-r border-none border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-14">
                        <h2 className='text-2xl font-mono font-semibold'>Contact</h2>
                        <p className='text-lg mt-2 text-gray-600'>Hubungi saya</p>

                        <ContactItems
                            label='Mail'
                            value='lawl@my.id'
                            icon='Mail.svg'
                            className='mt-6 md:w-15'
                        />

                        <ContactItems
                            label='Phone'
                            value='081212121212'
                            icon='phone.svg'
                            className='mt-6'
                        />

                        <ContactItems
                            label='Twitter'
                            value='@lawl'
                            icon='twitter.svg'
                            className='mt-6'
                        />
                    </div>
                </div>

                <div className="w-6/12">
                    <form className="lg:py-16 lg:px-20 md:p-14">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">

                                <Field
                                 name='name'
                                 label='Name'
                                 type='text'
                                 className=''
                                />

                            </div>

                            <div className="lg:w-6/12 w-full px-4">

                                <Field
                                 name='email'
                                 label='Email'
                                 type='text'
                                 className=''
                                />
                            </div>
                        </div>

                        <Field 
                        name='subject'
                        label='Subject'
                        type='textarea'
                        className='h-40'
                        />
                        <div className="text-right">
                            <Button pill className='bg-black hover:bg-yellow-500 hover:text-black text-white'>Send</Button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact;