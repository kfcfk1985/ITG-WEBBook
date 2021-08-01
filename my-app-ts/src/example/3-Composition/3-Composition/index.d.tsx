interface LayoutPropsChildren {
  content: React.ReactNode;
  text: string;
  // btnClick(): void;
  btnClick: { (): void };
  // btnClick: () => void;
}

export interface DefaultProps {
  children?: React.ReactElement; //! 等效 children: React.ReactElement|undefined
}

export interface LayoutProps {
  title?: string;
  children: LayoutPropsChildren;
  showTopBar: boolean;
  showBottomBar: boolean;
}
