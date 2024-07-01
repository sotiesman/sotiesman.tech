import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Table as UITable
} from '@sdnsdev/ui'

type TableProps = {
  headers: string[]
  rows: string[][]
}

const Table = (props: TableProps) => {
  const { headers, rows } = props

  return (
    <UITable className='not-prose'>
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            // eslint-disable-next-line @eslint-react/no-array-index-key
            <TableHead key={`${i}`}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <TableRow key={i}>
            {row.map((cell, j) => (
              // eslint-disable-next-line @eslint-react/no-array-index-key
              <TableCell key={j}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  )
}

export default Table
