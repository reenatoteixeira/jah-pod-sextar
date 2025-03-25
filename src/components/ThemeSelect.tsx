import availableThemes from '../themes/availableThemes.ts'

interface ThemeSelectProps {
  onChange: (theme: string) => void
}

function ThemeSelect({ onChange }: ThemeSelectProps) {
  const themes = availableThemes

  return (
    <select
      name='themes'
      id='theme-select'
      onChange={e => onChange(e.target.value)}
      defaultValue='default'
      title='Select theme'
      className='appearance-auto pr-2 cursor-pointer'
    >
      <option value='default' disabled hidden>
        Select theme
      </option>
      <option value='system' className='text-slate-950'>
        System
      </option>
      {themes.map(theme => (
        <option
          key={`theme--${theme.toString().toLowerCase().split(' ').join('-')}`}
          value={`theme--${theme.toString().toLowerCase().split(' ').join('-')}`}
          className='text-slate-950'
        >
          {theme}
        </option>
      ))}
    </select>
  )
}

export default ThemeSelect
