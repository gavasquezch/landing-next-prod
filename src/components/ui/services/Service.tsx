import ContenidoDynamico from '../admin/contenido/DynamicContent';
import ServicesGrid from './ServicesGrid';

export interface Service {
  id: string;
  title: string;
  description: string;
  mediaUrl: string | null;
  serviceUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  siteColor: string | undefined | null;
  services: Service[];
  title?: string;
  description?: string;
  mediaUrl?: string | null;

}

export default function Service( { services, siteColor, title, description, mediaUrl }: Props ) {
  return (
    <div id="services" className="container relative md:mt-24 mt-16 md:mb-24 mb-10">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-2xl font-bold uppercase mb-2" style={ { color: siteColor || '#000' } }>{ title ? title : 'Titulo del servicio' }</h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">¿Que ofrecemos?</h3>
        <div className="max-w-xl mx-auto">
          <ContenidoDynamico text={ description ? description : 'Descripción del servicio' } colorText={ '#94a3b8' } />
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl place-items-center">
          { services.map( ( service ) => (
            <ServicesGrid key={ service.id } service={ service } siteColor={ siteColor } />
          ) ) }
        </div>
      </div>
    </div>
  );
}