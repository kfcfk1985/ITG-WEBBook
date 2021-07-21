declare module '*.css';
declare module '*.less';
declare module '*.png';//! 声明 '*.png' 模块的类型
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
