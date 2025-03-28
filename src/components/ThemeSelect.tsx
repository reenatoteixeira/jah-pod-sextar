import availableThemes from '../themes/availableThemes.ts'

interface ThemeSelectProps {
  selectedTheme: string | null
  onChange: (theme: string) => void
}

function ThemeSelect({ onChange, selectedTheme }: ThemeSelectProps) {
  const themes = availableThemes,
    themeNameMaxLength = 15

  return (
    <select
      name='themes'
      id='theme-select'
      onChange={e => onChange(e.target.value)}
      defaultValue={selectedTheme ?? 'default'}
      title='Select theme'
      className='overflow-ellipsis cursor-pointer max-w-30 bg-background text-primary'
    >
      <option value='default' disabled hidden>
        Select theme
      </option>
      <option value='system'>System</option>
      {themes.map(theme => (
        <option
          key={`theme--${theme.toString().toLowerCase().split(' ').join('-')}`}
          value={`theme--${theme.toString().toLowerCase().split(' ').join('-')}`}
        >
          {theme.length > themeNameMaxLength
            ? theme.substring(0, themeNameMaxLength) + '...'
            : theme}
        </option>
      ))}
    </select>
  )
}

export default ThemeSelect
