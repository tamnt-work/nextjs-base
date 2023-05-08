import * as yup from 'yup';

/**
 * Yup async validator
 *
 * @param schema
 * @returns
 */
export const yupSync: any = (schema: yup.AnyObjectSchema) => ({
  async validator({ field }: { field: string; fullField: string; type: string }, value: any) {
    await schema.validateSyncAt(field, { [field]: value });
  },
});
