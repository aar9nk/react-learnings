import Button from "./Button";

export default function Form({heading, variant, onSubmit, children}) {
  return(
    <div style={{border: variant === 'border' ? '1px black solid' : ''}}>
    <h3>{heading}</h3>
    <form onSubmit={onSubmit}>
      {children}
      <Button type="submit">Ok</Button>
    </form>
    </div>
  )
}