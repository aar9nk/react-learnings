export default function Input({placeholder, type, onChange, valid}) {
  return(
    <input style={{border: '2px solid', borderColor: valid ? 'green' : 'red'}} placeholder={placeholder} type={type} onChange={onChange} />
  )
}