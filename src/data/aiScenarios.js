export const aiScenarios = [
  {
    id: 'stockout',
    name: 'Stockout Prevention & Auto-PO',
    userPrompt: 'Which fast-moving products are at risk of running out of stock this week?',
    aiResponse: {
      summary: 'Based on last 30-day consumption velocity and current transit orders, 3 critical SKUs will breach safety buffer stock within 96 hours:',
      items: [
        { name: 'Industrial Valve-X (SKU-1082)', currentStock: '42 units', dailyRunRate: '16 units/day', daysRemaining: '2.6 Days', supplier: 'Rao Metals', leadTime: '3 Days', status: 'CRITICAL' },
        { name: 'Hydraulic Seal Ring 40mm (SKU-4029)', currentStock: '110 units', dailyRunRate: '35 units/day', daysRemaining: '3.1 Days', supplier: 'Precision Plastics', leadTime: '2 Days', status: 'WARNING' },
        { name: 'Synthetic Gear Lubricant 5L (SKU-8821)', currentStock: '14 cans', dailyRunRate: '4 cans/day', daysRemaining: '3.5 Days', supplier: 'PetroTech Corp', leadTime: '4 Days', status: 'WARNING' }
      ],
      recommendation: 'Recommended Action: I have pre-calculated an optimal consolidated Purchase Order for Rao Metals for 120 units to hit their quantity discount tier (saving 6.5%).',
      actionLabel: 'Generate Draft PO-1093',
      actionConfirm: 'Draft PO-1093 created in Procurement queue with negotiated vendor pricing applied.'
    }
  },
  {
    id: 'receivables',
    name: 'Working Capital & Overdue Recovery',
    userPrompt: 'Analyze our overdue receivables exceeding 45 days and identify collection priority.',
    aiResponse: {
      summary: 'You have ₹14,82,000 in receivables exceeding 45-day credit terms across 4 accounts. 1 account exhibits high risk of cashflow drag:',
      items: [
        { name: 'Apex Infra Projects', currentStock: '₹6,40,000', dailyRunRate: '58 Days Overdue', daysRemaining: 'High Risk', supplier: 'Credit Limit: ₹5,00,000 (Exceeded)', leadTime: 'Last Payment: 42d ago', status: 'CRITICAL' },
        { name: 'Delta Fabrications', currentStock: '₹4,12,000', dailyRunRate: '49 Days Overdue', daysRemaining: 'Medium', supplier: 'Credit Limit: ₹10,00,000 (OK)', leadTime: 'Promise to Pay: Oct 5', status: 'WARNING' },
        { name: 'Kavita Electricals', currentStock: '₹2,80,000', dailyRunRate: '46 Days Overdue', daysRemaining: 'Low', supplier: 'Credit Limit: ₹5,00,000 (OK)', leadTime: 'Weekly customer', status: 'NORMAL' }
      ],
      recommendation: 'Recommended Action: Freeze new order release for Apex Infra until ₹3,00,000 minimum installment is received, and dispatch an automated WhatsApp statement with Razorpay payment link.',
      actionLabel: 'Send WhatsApp Statements & Place Credit Hold',
      actionConfirm: 'Automated WhatsApp payment notices dispatched. Credit block enabled on Apex Infra in Sales Module.'
    }
  },
  {
    id: 'manufacturing-bottleneck',
    name: 'Shop Floor Bottleneck Detection',
    userPrompt: 'Are any production work centers causing delays on Assembly Line 2?',
    aiResponse: {
      summary: 'CNC Milling Station #3 is currently operating at 118% load capacity, causing a 4.2-hour queue backlog for Work Order #WO-204 (Precision Gears):',
      items: [
        { name: 'CNC Milling Station #3', currentStock: '118% Load', dailyRunRate: '+4.2 hrs backlog', daysRemaining: 'Bottleneck', supplier: 'Tool Wear: 82%', leadTime: 'Cycle: 14m/unit', status: 'CRITICAL' },
        { name: 'Heat Treatment Oven #1', currentStock: '44% Load', dailyRunRate: 'Idle capacity available', daysRemaining: 'Available', supplier: 'Temp: Normal', leadTime: 'Cycle: 45m/batch', status: 'NORMAL' },
        { name: 'Final Inspection Bench #2', currentStock: '88% Load', dailyRunRate: 'On schedule', daysRemaining: 'Nominal', supplier: 'QC Passed: 99.2%', leadTime: 'Cycle: 3m/unit', status: 'NORMAL' }
      ],
      recommendation: 'Recommended Action: Auto-rebalance 35% of secondary milling passes to CNC Milling Station #4 (currently running at 52% capacity) to restore schedule buffer before evening shift.',
      actionLabel: 'Rebalance Routing to Station #4',
      actionConfirm: 'Work orders dynamically rescheduled. Estimated line completion time restored to 05:15 PM.'
    }
  }
];
