interface LanguageSelectProps {
  selectedLang: string
  onChange: (theme: string) => void
}

function LanguageSelect({ onChange, selectedLang }: LanguageSelectProps) {
  const languages = [
    {
      code: 'en',
      flag: '🇺🇸',
    },
    {
      code: 'pt',
      flag: '🇧🇷',
    },
  ]

  return (
    <select
      name='themes'
      id='theme-select'
      onChange={e => onChange(e.target.value)}
      defaultValue={selectedLang}
      title='Select theme'
      className='overflow-ellipsis cursor-pointer max-w-30 bg-background text-primary pr-4'
    >
      {languages.map(language => (
        <option key={language.code} value={language.code}>
          {language.flag}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelect
