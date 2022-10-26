import { SvgXml } from 'react-native-svg'

const Unipaz = ({ theme = { letter: '#000000' }, ...restOfProps }) => (
  <SvgXml
    xml={UNIPAZ_LOGO(theme)}
    {...restOfProps}
  />
)

const UNIPAZ_LOGO = theme => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.32 163.61"><defs><style>.cls-1{fill:#1e1f1d;}.cls-2{fill:#243673;}.cls-3{fill:#129740;}</style></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><circle id="Ojo" class="cls-1" cx="101.73" cy="47.33" r="3.33"/><path id="Azul" class="cls-2" d="M0,79.73,85.44,0l86.88,81.16L120.59,130.6s17.72-8.32-3.43-65.3c-.65-1.48-1.41-10.5,1.29-13.11a20,20,0,0,1,5.86-4.46c-9.1-1.79-15.2-8.59-22.29-8.58-6.51,0-13.45,6.77-20,13.76C73.44,62.56,70.22,65.3,65.15,68.59,50.86,81.16,7.94,89.82,0,79.73Z"/><path id="Verde" class="cls-3" d="M8.28,89l77.88,74.59s14.38-25.58-8.15-41c-7.86-5.4-44.74-20-45.7-20.29C28.43,101,8.28,89,8.28,89Z"/></g></g></svg>'

export default Unipaz
