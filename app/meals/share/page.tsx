import ShareForm from "@/components/meals/share/shareForm"

const Share = () => {
    return (
        <div className="m-10 flex flex-col text-white gap-3">
        <h1 className="text-5xl font-bold">Share your <span className="text-transparent bg-gradient-to-r from-primary to-yellow-500 bg-clip-text">favorite meal</span></h1>
        <p className="text-2xl font-light">
          or any other meal you feel sharing!
        </p>
        <ShareForm />
      </div>
    )
}

export default Share