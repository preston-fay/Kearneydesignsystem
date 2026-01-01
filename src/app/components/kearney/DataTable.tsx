import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface Column {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  striped?: boolean;
  hoverable?: boolean;
}

export function DataTable({ columns, data, striped = true, hoverable = true }: DataTableProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            {columns.map((column) => (
              <TableHead 
                key={column.key} 
                className={`text-${column.align || 'left'} font-semibold`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow 
              key={rowIndex}
              className={`
                ${striped && rowIndex % 2 === 1 ? 'bg-muted/30' : ''}
                ${hoverable ? 'hover:bg-accent/50' : ''}
              `}
            >
              {columns.map((column) => (
                <TableCell 
                  key={column.key} 
                  className={`text-${column.align || 'left'}`}
                >
                  {column.render 
                    ? column.render(row[column.key], row) 
                    : row[column.key]
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
