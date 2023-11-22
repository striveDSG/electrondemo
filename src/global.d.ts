declare type Recordable<T = any> = Record<string, T>;

declare type Nullable<T> = T | null;

// 获取组件实例类型
declare type InstanceTypeComponent<T> = T extends new (...args: any) => infer U
  ? U | null
  : never;

declare type NullableInstanceTypeComponent<T> = Nullable<
  InstanceTypeComponent<T>
>;

// * 获取组件props类型
declare type InstanceTypeComponentProps<T> = T extends new (...args: any) => {
  $props: infer U;
}
  ? U | null
  : never;

declare type MaybeRef<T> = Ref<T> | T;
