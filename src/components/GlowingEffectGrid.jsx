
'use client';
import { useRouter } from 'next/navigation';
import { GlowingEffect } from '@/components/ui/glowing-effect';

/**
 * GridItem component
 * @param {{
 *   area: string,
 *   icon: React.ReactNode,
 *   title: string,
 *   description: string,
 *   href: string,
 *   imageSrc: string,
 *   imageAlt?: string
 * }} props
 */
const GridItem = ({
  area,
  icon,
  title,
  description,
  href,
  imageSrc,
  imageAlt = 'Image'
}) => {
  const router = useRouter();

  return (
    <li onClick={() => router.push(href)} className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)), url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
            <div className="w-fit rounded-lg border border-gray-200 p-2 bg-white">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold text-white md:text-2xl">
                {title}
              </h3>
              <h2 className="font-sans text-sm text-neutral-200 md:text-base">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

/**
 * GlowingEffectGrid component
 * @param {{ items: Array<{
 *   area: string,
 *   icon: React.ReactNode,
 *   title: string,
 *   description: string,
 *   href: string,
 *   imageSrc: string,
 *   imageAlt?: string
 * }> }} props
 */
export function GlowingEffectGrid({ items }) {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {items.map((item, idx) => (
        <GridItem key={idx} {...item} />
      ))}
    </ul>
  );
}
export default GlowingEffectGrid;
