import { formData } from './forms'
import { select } from 'lib/dom'
import { map } from 'lib/utils'

export default () => {
  const form = select('form')!
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = formData(form);
      console.log(data)
      console.log(map)
  })
}
