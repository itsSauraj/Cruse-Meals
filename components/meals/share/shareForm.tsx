import Input from "./input"
import TextArea from './textarea';
import ImagePicker from './imagePicker';

import SubmitButton from './submitButton'

import { handleFormSubmit } from "@/lib/actions";

const ShareForm = () => {
  return (
  <form className='w-full lg:w-[50%] flex flex-col gap-4' action={handleFormSubmit} method="POST">
    <div className='flex flex-col md:flex-row gap-4 w-full'>
      <Input 
        title="Full Name"
        name="creator"
        id="creator"
        placeholder="Full Name"
      />
      <Input 
        title="Email"
        name="creator_email"
        type="email"
        id="creator_email"
        placeholder="Email"
      />
    </div>
    <Input 
        title="Title"
        name="title"
        id="title"
        placeholder="Title"
    />
    <Input 
        title="Summary"
        name="summary"
        id="summary"
        placeholder="Sumary"
    />
    <TextArea
        title="Instructions"
        name="instructions"
        id="instructions"
        placeholder="Write you recipe instructions here"
        rows={10}
      />
    <ImagePicker />
    <SubmitButton />
  </form>
)
}

export default ShareForm