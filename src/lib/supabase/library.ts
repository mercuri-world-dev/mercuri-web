import { supabase } from '../../supabaseClient';

export async function addOrUpdateLibraryResource(title: string, description: string) {
  const { data, error } = await supabase
    .from('library_resources')
    .insert([{ title, description }]);
  return { data, error };
}