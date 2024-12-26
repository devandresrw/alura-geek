import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { addProduct } from '@/utils';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const name = formData.get('name') as string;
    const price = formData.get('price') as string;

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: "Archivo inválido o no proporcionado" },
        { status: 400 }
      );
    }

    // Obtener el nombre del archivo
    const filename = (file as File).name || 'unnamed-file';
    // Leer el archivo como ArrayBuffer usando la API de Blob
    const arrayBuffer = await new Response(file).arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const uniqueFilename = `${Date.now()}-${filename}`;
    const filePath = path.join(uploadDir, uniqueFilename);

    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      data: {
        name,
        price: Number(price),
        url: `/uploads/${uniqueFilename}`
      }
    });


  } catch (error) {
    console.error('Error detallado:', error);
    return NextResponse.json(
      { error: "Error al procesar la subida del archivo" },
      { status: 500 }
    );
  }
}